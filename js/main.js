

let buttons=document.querySelectorAll(".projects .project")
let i=0;
buttons.forEach(button => {
    i++
            if(i %2==0){
            button.style.flexDirection='row-reverse'
            
        }
    })

    document.getElementById("download").addEventListener("click", function() {
        var link = document.createElement('a');
      link.setAttribute('href', 'https://drive.google.com/file/d/1ul_ZZmWzsCaYF4r7OHahL9Sc8J5z4u2s/view?usp=sharing');
      link.setAttribute('download', 'Seaf_GamelCV.pdf');
      link.setAttribute('rel', 'noopener');
      link.click();
      });
      console.log("download")