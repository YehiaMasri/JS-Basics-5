var prime = document.getElementById('prime');
        function isPrime(n) {
        if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
        var m = Math.sqrt(n);
        for (var i = 2; i <= m; i++)
            if (n % i == 0) return false;
        return true;
    }

    for(let i=2 ; i<=30 ; i++ ){
        if(isPrime(i)){
            var title = document.createTextNode(i + " ");
            prime.appendChild(title);
        }
    }