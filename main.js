console.log( 'asdf' );

var myword = document.querySelectorAll(".myword");
console.log(myword[0].value)

// async/await
async function getData( query ) {
    try {
        // const foobar = await fetch( "https://www.dictionaryapi.com/api/v3/references/collegiate/json/dog?key=c06d101b-29a1-45a9-9d52-75e226da4903" );
        const myInfo = await fetch( `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${query}?key=c06d101b-29a1-45a9-9d52-75e226da4903` );
        // console.log( foobar );
        const wordfortheday = await myInfo.json();

        console.log( wordfortheday );

        const content = document.getElementById( "word-info" );
        content.innerHTML = `
        
            <h1>${wordfortheday[0].meta.id}</h1>
         
            <p>${wordfortheday[0].shortdef[0]}</p>
        
        `;

        const pronounciation = document.getElementById("pronounciation");
        pronounciation.innerHTML=`${wordfortheday[0].hwi.prs[0].mw}`

        const date = document.getElementById("date");
        date.innerHTML=`Date : ${wordfortheday[0].date}`





    } catch( error ) {
        // console.warn( "Nope: " + error );
        console.warn( `Nope: ${error}` );
    }
    
}




getData(myword.value) ;