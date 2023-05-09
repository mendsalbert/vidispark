// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Vidispark {
  // NFTs
  struct NFT {
    uint256 id;
    address creator;
    string metadata;
  }

  mapping(uint256 => NFT) public nfts;
  uint256 public nftCount;

  // Social tokens
  struct SocialToken {
    uint256 id;
    string name;
    string symbol;
    uint256 totalSupply;
    mapping(address => uint256) balances;
    mapping(address => mapping(address => uint256)) allowances;
  }

  mapping(address => SocialToken) public socialTokens;

  // Sponsorship marketplace
  struct Sponsorship {
    uint256 id;
    address brand;
    address creator;
    string type;
    string description;
    uint256 startDate;
    uint256 endDate;
    string status;
  }

  mapping(uint256 => Sponsorship) public sponsorships;
  uint256 public sponsorshipCount;

  event NewNFT(uint256 id, address creator, string metadata);
  event NewSocialToken(address creator, string name, string symbol, uint256 totalSupply);
  event NewSponsorship(uint256 id, address brand, address creator, string type, string description, uint256 startDate, uint256 endDate, string status);

  // Mint a new NFT
  function mintNFT(address _creator, string memory _metadata) public {
    nftCount++;
    nfts[nftCount] = NFT(nftCount, _creator, _metadata);
    emit NewNFT(nftCount, _creator, _metadata);
  }

  // Issue a new social token
  function issueSocialToken(string memory _name, string memory _symbol, uint256 _totalSupply) public {
    require(socialTokens[msg.sender].id == 0, "Social token already issued");
    SocialToken memory socialToken = SocialToken({id: block.timestamp, name: _name, symbol: _symbol, totalSupply: _totalSupply});
    socialTokens[msg.sender] = socialToken;
    socialToken.balances[msg.sender] = _totalSupply;
    emit NewSocialToken(msg.sender, _name, _symbol, _totalSupply);
  }

  // Transfer social tokens
  function transfer(address _to, uint256 _amount) public {
    SocialToken storage socialToken = socialTokens[msg.sender];
    require(socialToken.balances[msg.sender] >= _amount, "Insufficient balance");
    socialToken.balances[msg.sender] -= _amount;
    socialToken.balances[_to] += _amount;
    emit Transfer(msg.sender, _to, _amount);
  }

  // Approve a spender to spend social tokens
  function approve(address _spender, uint256 _amount) public {
    SocialToken storage socialToken = socialTokens[msg.sender];
    socialToken.allowances[msg.sender][_spender] = _amount;
    emit Approval(msg.sender, _spender, _amount);
  }

  // Transfer social tokens from a spender
  function transferFrom(address _from, address _to, uint256 _amount) public {
    SocialToken storage socialToken = socialTokens[_from];
    require(socialToken.balances[_from] >= _amount, "Insufficient balance");
    require(socialToken.allowances[_from][msg.sender] >= _amount, "Insufficient allowance");
    socialToken.balances[_from] -= _amount;
   socialToken.allowances[_from][msg.sender] -= _amount;
socialToken.balances[_to] += _amount;
emit Transfer(_from, _to, _amount);
}

// Create a new sponsorship
function createSponsorship(address _brand, string memory _type, string memory _description, uint256 _startDate, uint256 _endDate) public {
require(_endDate > _startDate, "Invalid dates");
sponsorshipCount++;
sponsorships[sponsorshipCount] = Sponsorship(sponsorshipCount, _brand, msg.sender, _type, _description, _startDate, _endDate, "active");
emit NewSponsorship(sponsorshipCount, _brand, msg.sender, _type, _description, _startDate, _endDate, "active");
}

// Get the list of active sponsorships for a creator
function getActiveSponsorships(address _creator) public view returns (uint256[] memory) {
uint256[] memory activeSponsorships = new uint256;
uint256 count = 0;
for (uint256 i = 1; i <= sponsorshipCount; i++) {
Sponsorship storage sponsorship = sponsorships[i];
if (sponsorship.creator == _creator && sponsorship.endDate >= block.timestamp && keccak256(bytes(sponsorship.status)) == keccak256(bytes("active"))) {
activeSponsorships[count] = i;
count++;
}
}
uint256[] memory result = new uint256;
for (uint256 i = 0; i < count; i++) {
result[i] = activeSponsorships[i];
}
return result;
}

// Get the details of a sponsorship
function getSponsorship(uint256 _id) public view returns (uint256, address, address, string memory, string memory, uint256, uint256, string memory) {
Sponsorship storage sponsorship = sponsorships[_id];
return (sponsorship.id, sponsorship.brand, sponsorship.creator, sponsorship.type, sponsorship.description, sponsorship.startDate, sponsorship.endDate, sponsorship.status);
}
}
