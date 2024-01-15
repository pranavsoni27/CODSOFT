let a;
        let date;
        let time;
        const options = { weekday: 'long', year: 'numeric', month: 'long',hour: '2-digit',minute: '2-digit',secound: '2-digit', day: 'numeric' };
        setInterval(() => {
            a = new Date(); 

            date = a.toLocaleDateString(undefined, options);

            time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();

            document.getElementById('time').innerHTML = time +  "<br>on " + date ;
        }, 1000);

    