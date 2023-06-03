function doubleLast(seq) {
    this.seq = seq;
    this.display = 'Double the last number';
    this.match = (seq) => seq.every((v, i) => (i > 0) ? v === seq[i - 1] * 2 : true);
    this.values = (seq) => {
        if(seq.length < 10) {
            for(i=seq.length; i< 10; i++) {
                seq[i] = seq[i - 1] * 2;
            }
        }
        return seq;
    }
}

function simpleAdd(seq) {
    const addNum = (seq) => seq[1] - seq[0];
    this.seq = seq;
    this.display = 'Add a single number';
    this.match = (seq) => {
        // subtract initial value from the second
        return seq.every((v, i) => (i > 0) ? v === seq[i - 1] + addNum(seq) : true);
    };
    this.values = (seq) => {
        if(seq.length < 10) {
            for(i=seq.length; i< 10; i++) {
                seq[i] = seq[i - 1] + addNum(seq);
            }
        }
        return seq;
    }
}

function divideAddMod(seq) {
    const modifier = (seq) => seq[1] - (seq[0] * 2);
    this.seq = seq;
    this.display = 'Try to divide by 2, then add Mod';
    this.match = (seq) => {
        // subtract initial value from the second
        return seq.every((v, i) => (i > 0) ? v === (seq[i - 1] * 2) + modifier(seq) : true);
    };
    this.values = (seq) => {
        if(seq.length < 10) {
            for(i=seq.length; i< 10; i++) {
                seq[i] = seq[i - 1] * 2 + modifier(seq);
            }
        }
        return seq;
    }
}

const algos = [new doubleLast(), new simpleAdd(), new divideAddMod()];

document.addEventListener('click', (e) => {
    if (e.target.matches('button')) {
        let seq = document.querySelector('input').value.split(' ').map(e => parseInt(e));
        el = document.getElementById('result');
        el.innerHTML = "";
        algos.forEach(a => {
            let possibleMatch = a.match(seq);
            if (possibleMatch) {
                resultValue = ` - <span style = 'color: blue'><strong>Match found: </strong>${a.display} - ${a.values(seq)}</span> <br/>`;
            } else {
                resultValue = ` - ${a.display} <strong style='color: red'>did not match</strong> <br/>`;
            }
            el.innerHTML = el.innerHTML + resultValue;
        });
        
    }
});