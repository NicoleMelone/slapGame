var health = 100
var hits = 0

function attack(action) {
    if (action === 'slap') {
        health -= 10
        hits += 10
    } else if (action === 'kick') {
        health -= 20
        hits += 20
    } else {
        health -= 15
        hits += 15
    }
    upDate()
}


function upDate() {

    let template = ''
    let template2 = ''

    template += `<div class="col-7">Health ${health}%
<div class="progress">
<div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: ${health}%"
    aria-valuenow="${health}" aria-valuemin="0" aria-valuemax="100"></div>
</div>
</div>`

    template2 += `<div class="col-7">Kryptonite ${hits}% 
    <div class="progress">
  <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: ${hits}%" aria-valuenow="${hits}" aria-valuemin="0" aria-valuemax="100"></div>
</div>`

    document.getElementById('bar').innerHTML = template
    document.getElementById('hitBar').innerHTML = template2
}

upDate()



