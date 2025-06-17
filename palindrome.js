const input=document.getElementById("input-text")
const button=document.getElementById("check-btn")
const output=document.getElementById("output")

function isPalindrome(str){
    const cleaned=str.toLowerCase().replace(/[^a-z0-9]/g, "")
    let left=0, right=cleaned.length-1
    while(left<right){
        if(cleaned[left]!==cleaned[right]) return false
        left++
        right--
    }
    return true
}

button.addEventListener("click", ()=>{
    const value=input.value
    if(!value.trim()){
        output.textContent="Please enter a text."
        return 
    }

    const isPalin=isPalindrome(value)
    output.textContent=isPalin? `"${value}" is a palindrome`: `"${value}" is not a palindrome`
})

 