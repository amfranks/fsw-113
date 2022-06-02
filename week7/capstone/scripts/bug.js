var bugNumber = 0;

class Bug {
    constructor(...args) {
        this.reportedBy = args[0],
            this.system = args[1],
            this.subSystem = args[2],
            this.bugDesc = args[3]
    }

    addBug() {
        bugNumber++;
        const listWrapper = document.getElementById('listWrapper');
        let bugDiv = document.createElement('div');
        bugDiv.id = 'myBug';

        let p = document.createElement('p');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');

        p.textContent = 'Reported by: ' + this.reportedBy;
        p1.textContent = 'System: ' + this.system + ' >>> ' + this.subSystem;
        p2.textContent = this.bugDesc;
        p2.id = "bugP2";
        p3.textContent = 'BUG #' + bugNumber;
        p3.style.color = 'black';
        p3.style.fontSize = '1.2rem';

        bugDiv.appendChild(p3);
        bugDiv.appendChild(p);
        bugDiv.appendChild(p1);
        bugDiv.appendChild(p2);

        let resolveButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        resolveButton.id = 'resolveButton';
        deleteButton.id = 'deleteButton';

        resolveButton.innerHTML = 'RESOLVE';
        deleteButton.innerHTML = 'DELETE';

        bugDiv.appendChild(resolveButton);
        bugDiv.appendChild(deleteButton);

        resolveButton.addEventListener('click', () => {
            resolveButton.style.display = 'none';
            bugDiv.style.backgroundColor = 'grey';
            p.style.backgroundColor = 'grey';
            p1.style.backgroundColor = 'grey';
            p2.style.backgroundColor = 'grey';
            p3.style.backgroundColor = 'grey';
        });

        deleteButton.addEventListener('click', () => {
            bugDiv.remove();
        });

        listWrapper.appendChild(bugDiv);
    }
}

function reportBug() {
    let bug = new Bug(document.getElementById('reportedBy').value, document.getElementById('system').value, document.getElementById('subSystem').value, document.getElementById('bugDesc').value);

    bug.addBug();
}