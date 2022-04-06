const labels = [
    "Playstation 2",
    "Gamecube",
    "Nintendo Switch",
    "Nintendo DS",
    "PS4 Pro",
];

const data = {
    labels: labels,
    datasets:[
        {
            label: "Most played consoles in hours",
            data: [10000, 5000, 6000, 1000, 2000],
            backgroundColor: ['#FF6B6B','FFD93D','#6BCB77','#F473B9'],

        }
    ] 
}




const config = {
    type:'doughnut',
    data:data,
}

const config2 = {
    type:'bar',
    data:data,
}


new Chart(document.getElementById("js--chart--1"), config)
new Chart(document.getElementById("js--chart--2"), config2)