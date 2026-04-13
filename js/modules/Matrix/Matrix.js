function Matrix() {
    this.createMatrix = function(length, type) {
        const arr = [];

        for (let i = 0; i < length; i++) {
            arr.push([]);
            for (let j = 0; j < length; j++) {
                arr[i].push(0);
            }
        }

        switch (type) {
            case 'Zero':
                break;

            case 'MainDiag':
                for (let i = 0; i < length; i++) {
                    arr[i][i] = 1;
                }
                break;

            case 'SecondDiag':
                for (let i = 0; i < length; i++) {
                    arr[i][length - i - 1] = 1;
                }
                break;

            case 'Upper':
                for (let i = 0; i < length; i++) {
                    for (let j = i; j < length; j++) {
                        arr[i][j] = 1;
                    }
                }
                break;

            case 'Lower':
                for (let i = 0; i < length; i++) {
                    for (let j = 0; j <= i; j++) {
                        arr[i][j] = 1;
                    }
                }
                break;

            case 'I':
                for (let i = 0; i < length; i++) {
                    for (let j = 0; j < length; j++) {
                        arr[i][j] = i + 1;
                    }
                }
                break;

            case 'J':
                for (let i = 0; i < length; i++) {
                    for (let j = 0; j < length; j++) {
                        arr[i][j] = j + 1;
                    }
                }
                break;
        }

        return arr;
    };
}