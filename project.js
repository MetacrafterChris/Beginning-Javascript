/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/


// create a variable to hold your NFT's
let nftCount = 0;
const nftList = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, developer, releaseDate) {
    const nft = {
        name: name,
        developer: developer,
        releaseDate: releaseDate
    };
    nftList.push(nft);
    nftCount++;
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    console.log("NFT List")
    console.log("----------")
    for (const nft of nftList) {
        console.log("NFT: " + nft.name)
        console.log("Developer: " + nft.developer)
        console.log("Release Date: " + nft.releaseDate)
        console.log("-----")
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftCount;
}

// call your functions below this line

// add data to nftList
mintNFT("Axie Infinity", "Sky Mavis", "March 2018");
mintNFT("Azuki", "Chiru Labs", "January 2022");
mintNFT("Bored Ape Yacht Club", "Yuga Labs", "Arpil 2021");
mintNFT("Cool Cats", "Cool Cats", "June 2021");

// display all data
listNFTs();

// display number of data
console.log("Total number of NFTs: " + getTotalSupply());

