
document.addEventListener('DOMContentLoaded', ()=>{
    updatePosts()
})


function updatePosts(){
    fetch('http://localhost:5050/api/all').then(res=>{
        return res.json()
    }).then(json=>{
        
        let routerBars = ''
        let roteadores = JSON.parse(json)
        
         roteadores.forEach(roteador => {
            let routerBar = ``
         });

    })
}
