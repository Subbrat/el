{
    const date1 = new Date('mm/dd/yyyy'); //month date year
    const date2 = new Date();
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffTime + " milliseconds");
    console.log(diffDays + " days");
    document.getElementById('date').innerHTML = diffDays - 1 + " days ago";
}