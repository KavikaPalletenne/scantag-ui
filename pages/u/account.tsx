const jwt = localStorage.getItem('token')


useEffect(() => {
    if(jwt == null) {
        router.push('/login')
    }
})