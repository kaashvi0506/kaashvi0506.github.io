if(localStorage.getItem("score")==null)
{
    localStorage.setItem("score",0);
}

function startGame()
{
    localStorage.setItem("score",0);
    location.href="puzzle1.html";
}

function checkAnswer(correct,nextPage)
{
    let answer=document
        .getElementById("answer")
        .value
        .trim()
        .toLowerCase();

    if(answer===correct.toLowerCase())
    {
        let score=
            parseInt(localStorage.getItem("score"));

        score++;

        localStorage.setItem("score",score);

        alert("Correct!");
    }
    else
    {
        alert("Wrong answer!");
    }

    location.href=nextPage;
}

if(document.getElementById("score"))
{
    let score=
        localStorage.getItem("score");

    document.getElementById("score")
        .innerHTML=
        "You scored "+score+" out of 4";
}

function restartGame()
{
    localStorage.setItem("score",0);
    location.href="index.html";
}
