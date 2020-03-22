function myFunction() {
    var prices = {
        trek: {
          tuneUp: "Price Range: $60",
          chain: "Price Range: $35",
          tire: "Price Range: $50",
        }  
      } 
    // console.log(prices["trek"]["tuneUp"])
    var selectBrand = document.getElementById("selectBrand").value;    
    var selectIssue = document.getElementById("selectIssue").value;
    var priceTitle = document.getElementById("price-title");
    
    if (selectBrand === "trek" && selectIssue === "tune-up") {
        priceTitle.innerText = prices["trek"]["tuneUp"]

    }
    else if (selectBrand === "trek" && selectIssue === "chain") {
        priceTitle.innerText = prices["trek"]["chain"]

    }  
    else if (selectIssue == "tire") {
        priceTitle.innerText = prices["trek"]["tire"]
    }
}

