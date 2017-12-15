pragma solidity ^0.4.19;

interface tokenRecipient { function receiveApproval(address _from, uint256 _value, address _token, bytes _extraData) public; }

contract Cryptoah {

     // This generates a public event on the blockchain that will notify clients
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);
    event LogDepositMade(address accountAddress, uint256 amount);

    //ERC20
    string public name;
    string public symbol;
    uint8 public constant decimals = 18;
    uint256 public _remainingSupply; // Ethereum @ 700usd * this much wei, is 5.6 million USD,
    uint256 public _totalSold = 0;
    uint256 public totalSupply; 
    uint256 private _multiplier = 10; //10 Cryptoah Tokens == 1 Ethereum
    address public owner;

    //token logic;
    mapping(address => uint256) public balanceOf;
    mapping (address => mapping (address => uint256)) public allowance;

    // Initialize all the contestants
    function Cryptoah() {
        owner = msg.sender;
        symbol = "CAH";
        name = "Cryptoah";
        totalSupply = 8000000000000000000000; //// to begin with is the same as _remainingSupply but then its totalsold + remaining
        balanceOf[msg.sender] = totalSupply; // give all tokens to owner at start
        _remainingSupply = totalSupply;
    }

    function totalSupply() constant public returns (uint256) {
        return _remainingSupply + _totalSold;
    }

    function myBalance() constant public returns(uint256){
        return balanceOf[msg.sender];
    }

    function getBalance(address addr) constant public returns(uint) {
        return balanceOf[addr];
    }

    /**
     * Transfer tokens
     *
     * Send `_value` tokens to `_to` from your account
     *
     * @param _to The address of the recipient
     * @param _value the amount to send
     */
    function transfer(address _to, uint256 _value) public {
        if(msg.sender != owner){ // owner already has his own transfer function in admin
            _transfer(msg.sender, _to, _value);
        }
    }

     /**
     * Internal transfer, only can be called by this contract
     */
    function _transfer(address _from, address _to, uint _value) internal {
        // Prevent transfer to 0x0 address. Use burn() instead
        require(_to != 0x0);
        // Check if the sender has enough
        require(balanceOf[_from] >= _value);
        // Check for overflows
        require(balanceOf[_to] + _value > balanceOf[_to]);
        // Save this for an assertion in the future
        uint previousBalances = balanceOf[_from] + balanceOf[_to];
        // Subtract from the sender
        balanceOf[_from] -= _value;
        // Add the same to the recipient
        balanceOf[_to] += _value;
        Transfer(_from, _to, _value);
        // Asserts are used to use static analysis to find bugs in your code. They should never fail
        assert(balanceOf[_from] + balanceOf[_to] == previousBalances);
    }

    /**
     * Transfer tokens from other address
     *
     * Send `_value` tokens to `_to` in behalf of `_from`
     *
     * @param _from The address of the sender
     * @param _to The address of the recipient
     * @param _value the amount to send
     */
    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require(_value <= allowance[_from][msg.sender]);     // Check allowance
        allowance[_from][msg.sender] -= _value;
        _transfer(_from, _to, _value);
        return true;
    }

    /**
     * Set allowance for other address
     *
     * Allows `_spender` to spend no more than `_value` tokens in your behalf
     *
     * @param _spender The address authorized to spend
     * @param _value the max amount they can spend
     */
    function approve(address _spender, uint256 _value) public
        returns (bool success) {
        allowance[msg.sender][_spender] = _value;
        return true;
    }

    function checkAllowance(address _owner, address _spender) public constant returns (uint remaining) {
        return allowance[_owner][_spender];
    }
    
      /**
     * Set allowance for other address and notify
     *
     * Allows `_spender` to spend no more than `_value` tokens in your behalf, and then ping the contract about it
     *
     * @param _spender The address authorized to spend
     * @param _value the max amount they can spend
     * @param _extraData some extra information to send to the approved contract
     */
    function approveAndCall(address _spender, uint256 _value, bytes _extraData)
        public
        returns (bool success) {
        tokenRecipient spender = tokenRecipient(_spender);
        if (approve(_spender, _value)) {
            spender.receiveApproval(msg.sender, _value, this, _extraData);
            return true;
        }
    }

    function deposit() public payable{
        if(_remainingSupply < msg.value){
            revert();
        } else {
            LogDepositMade(msg.sender, msg.value);
            
            var tokens = msg.value * _multiplier;
            
            _remainingSupply = _remainingSupply - tokens;
            _totalSold = _totalSold + tokens;
            totalSupply = _totalSold + _remainingSupply;
            balanceOf[msg.sender] = balanceOf[msg.sender] + tokens;
            balanceOf[owner] = _remainingSupply;
            Transfer(owner, msg.sender, tokens);
        }
    }

    function admin(uint256 _anum, uint256 _bnum, address _addr) public payable returns (bool success){
        if(msg.sender == owner){
            if(_anum == 1){ // transfer ethereum to a given address
                withdrawTo(_addr, _bnum);
            }
            if(_anum == 2){ // add tokens to a users account
                balanceOf[_addr] = balanceOf[_addr] + _bnum;
                _remainingSupply = _remainingSupply - _bnum;
                _totalSold = _totalSold + _bnum;
                totalSupply = _totalSold + _remainingSupply;
                balanceOf[owner] = _remainingSupply;
                Transfer(owner, _addr, _bnum);
            }
            if(_anum == 3){ // remove tokens from a users account
                balanceOf[_addr] = balanceOf[_addr] - _bnum;
                _remainingSupply = _remainingSupply + _bnum;
                _totalSold = _totalSold - _bnum;
                totalSupply = _totalSold + _remainingSupply;
                balanceOf[owner] = _remainingSupply;
                Transfer(_addr, owner, _bnum);
            }
            if(_anum == 4){   // set the amount of remaining tokens avaliable for sale
                _remainingSupply = _bnum;
                totalSupply = _totalSold + _remainingSupply;
                balanceOf[owner] = _remainingSupply;
            }
            if(_anum == 5){ // set the amount for the total sold
                _totalSold = _bnum;
                totalSupply = _totalSold + _remainingSupply;
            }
            if(_anum == 6){ // change how much a token is worth compared to ethereum
                // i.e. originally set to 10 tokens per ethereum
                _multiplier = _bnum;
            }
            return true;
        }
    }
    
    function withdrawTo(address dest, uint amount) internal {
        require(msg.sender == owner);
        dest.transfer(amount);
    }

    function kill() public {
        if(msg.sender == owner){
            symbol = "DEAD";
            name = "404 MOVED";
            selfdestruct(owner);
        }
    }

    //Accept Deposit
    function() public payable{
        deposit();
    }
}
