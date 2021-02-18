import React, { useState, useEffect } from 'react'
// import axios from 'axios'

function DataFetching() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(() => {

        const f1 = fetch('https://jsonplaceholder.typicode.com/posts');
        const f2 = fetch('https://ghibliapi.herokuapp.com/people');

        // Promise.all([f1, f2]).then(([res1, res2]) => {
        //     console.log('Results', res1, res2)
        //   })
        // Promise.all([f1, f2])
        //     .then(res => {
        //         // console.log('Array of results', res)
        //     })
        //     .catch(err => {
        //         console.error(err)
        //     })

    const fetchPromiseAll =  Promise.all([f1, f2]).then(([res1, res2]) => {
            console.log('Results', res1, res2)
        });

        console.log(fetchPromiseAll);
       const check =  fetchPromiseAll.then(response => response);
        console.log(check);

        const fetchPromise = fetch(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)

        console.log(fetchPromise);

        fetchPromise.then(response => response.json())
            .then(data => {
                // console.log(data);
                //     setPost(data)
            })

        // .then(response => response.json())
        // .then(data => {
        //     console.log(data);
        //     setPost(data)
        //  })


        // .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        //     .then(res => {
        //         console.log(res)
        //         setPost(res.data)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
    }, [idFromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>
            {/* <ul>
				{posts.map(post => (
          <li key={post.id}>{post.title}</li>
				))}
			</ul> */}
        </div>
    )
}

export default DataFetching