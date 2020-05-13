
$(function(){

    const myurl  = `${url}/fetch-expenses`
    $.get(myurl,(res) => renderChart(res))
    
})

window.renderChart = (res) => {

    var val = JSON.parse(Base64.decode(res))
    let labels = []
    let data = []    
    for(let x = 0;x < val['value'].length;x++) {
        
        labels = [...labels,`${val['value'][x]['category']} $${val['value'][x]['amount']}`]
        data = [...data,val['value'][x]['amount']]
    }

    var brandPrimary = '#33b35a'
    var PIECHART = $('#pieChart')
    var myPieChart = new Chart(PIECHART, {
        type: 'doughnut',
        data: {
            labels,
            datasets: [
                {
                    data,
                    borderWidth: [1, 1, 1],
                    backgroundColor: [
                        brandPrimary,
                        "rgba(75,192,192,1)",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        brandPrimary,
                        "rgba(75,192,192,1)",
                        "#FFCE56"
                    ]
                }
            ]
        }
    })
}



    


