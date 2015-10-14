var team = prompt ("What is your favorite NFL team.");
switch (team) {
    case "Bears":
        alert ("Alshon Jeffery is a beast!");
        break;
    case "Bengals":
        alert ("A.J. Green is a beast!");
        break;
    case "Bills":
        alert ("Marcell Dareus is a beast!");
        break;
    case "Broncos":
        alert ("Demaryius Thomas is a beast!");
        break;
    case "Browns":
        alert ("Joe Haden is a beast!");
        break;
    case "Bucaneers":
        alert ("Vincent Jackson is a beast!");
        break;
    case "Cardinals":
        alert ("Patrick Peterson is a beast!");
        break;
    case "Chargers":
        alert ("Keenan Allen is a beast!");
        break;
    case "Chiefs":
        alert ("Jamaal Charles is a beast!");
        break;
    case "Colts":
        alert ("Andrew Luck is a beast!");
        break;
    case "Cowboys":
        alert ("Dez Bryant is a beast!");
        break;
    case "Dolphins":
        alert ("Brent Grimes is a beast!");
        break;
    case "Eagles":
        alert ("Sam Bradford is a beast!");
        break;
    case "Falcons":
        alert ("Julio Jones is a beast!");
        break;
    case "Giants":
        alert ("Odell Beckham Jr. is a beast!");
        break;
    case "Jaguars":
        alert ("Allen Robinson is a beast!");
        break;
    case "Jets":
        alert ("Darrelle Revis is a beast!");
        break;
    case "Lions":
        alert ("Calvin Johnson is a beast!");
        break;
    case "Packers":
        alert ("Aaron Rodgers is a beast!");
        break;
    case "Panthers":
        alert ("Luke Kuechly is a beast!");
        break;
    case "Patriots":
        alert ("Rob Gronkowski is a beast!");
        break;
    case "Raiders":
        alert ("Charles Woodson is a beast!");
        break;
    case "Rams":
        alert ("Robert Quinn is a beast!");
        break;
    case "Ravens":
        alert ("Terrell Suggs is a beast!");
        break;
    case "Redskins":
        alert ("Ryan Kerrigan is a beast!");
        break;
    case "Saints":
        alert ("Drew Brees is a beast!");
        break;
    case "Seahawks":
        alert ("Marshawn Lynch is a beast!");
        break;
    case "Steelers":
        alert ("Antonio Brown is a beast!");
        break;
    case "Texans":
        alert ("J.J. Watt is a beast!");
        break;
    case "Titans":
        alert ("Marcus Mariota is a beast!");
        break;
    case "Vikings":
        alert ("Adrian Peterson is a beast!");
        break;
    default:
        alert ("Please enter an NFL team.");
        break;
}
//PASSING YARD LEADERS CHART//
google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Player', 'Total Yards'],
        ['Philip Rivers, SD', 1613 ],
        ['Andy Dalton, CIN', 1518],
        ['Matt Ryan, ATL', 1456],
        ['Eli Manning, NYG', 1417],
        ['Tom Brady, NE', 1387]
    ]);

    var options = {
        title: 'League Leaders in Passing Yards',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total Yards',
            minValue: 0
        },
        vAxis: {
            title: 'Player'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}
//RUSHING YARD LEADERS CHART//
google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic1);

function drawBasic1() {

    var data = google.visualization.arrayToDataTable([
        ['Player', 'Total Yards'],
        ['Matt Forte, CHI', 438],
        ['Devonta Freeman, ATL', 405],
        ['Chris Johnson, ARI', 405],
        ['Doug Martin, TB', 405],
        ['Justin Forsett, BAL', 395]
    ]);

    var options = {
        title: 'League Leaders in Rushing Yards',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total Yards',
            minValue: 0
        },
        vAxis: {
            title: 'Player'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div0'));

    chart.draw(data, options);
}
//RECEIVING YARDS LEADERS CHART//
google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic2);

function drawBasic2() {

    var data = google.visualization.arrayToDataTable([
        ['Player', 'Total Yards'],
        ['DeAndre Hopkins, HOU', 578],
        ['Julio Jones, ATL', 545],
        ['Antonio Brown, PIT', 523],
        ['A.J. Green, CIN', 495],
        ['Larry Fitzgerald, AZ', 490]
    ]);

    var options = {
        title: 'League Leaders in Receiving Yards',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total Yards',
            minValue: 0
        },
        vAxis: {
            title: 'Player'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div1'));

    chart.draw(data, options);
}
//LEAGUE LEADERS IN TACKLES CHART//
google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic3);

function drawBasic3() {

    var data = google.visualization.arrayToDataTable([
        ['Player', 'Total Tackles'],
        ['Dqwell Jackson, IND', 58],
        ['Telvin Smith, JAC', 52],
        ['Vincent Ray, CIN', 49],
        ['Corey Graham, BUF', 48],
        ['Daryl Smith, BAL', 46]
    ]);

    var options = {
        title: 'League Leaders in Tackles',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total Tackles',
            minValue: 0
        },
        vAxis: {
            title: 'Player'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div2'));

    chart.draw(data, options);
}
//LEAGUE LEADERS IN SACKS CHART//
google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic4);

function drawBasic4() {

    var data = google.visualization.arrayToDataTable([
        ['Player', 'Total Sacks'],
        ['Ezekiel Ansah, DET', 5.0],
        ['Carlos Dunlap, CIN', 5.0],
        ['Clay Matthews, GB', 4.5],
        ['Gerald McCoy, TB', 4.5],
        ['Derrick Morgan, TEN', 4.5]
    ]);

    var options = {
        title: 'League Leaders in Sacks',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total Sacks',
            minValue: 0
        },
        vAxis: {
            title: 'Player'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div3'));

    chart.draw(data, options);
}
//LEAGUE LEADERS IN INTERCEPTION CHART//
google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic5);

function drawBasic5() {

    var data = google.visualization.arrayToDataTable([
        ['Player', 'Total in Interceptions'],
        ['Josh Norman, NC', 4],
        ['Charles Woodson, OAK', 4],
        ['Mike Adams, IND', 3],
        ['Rashad Johnson, ARI', 3],
        ['Walter Thurmond, PHI', 3]
    ]);

    var options = {
        title: 'League Leaders in Interceptions',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total Interceptions',
            minValue: 0
        },
        vAxis: {
            title: 'Player'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div4'));

    chart.draw(data, options);
}