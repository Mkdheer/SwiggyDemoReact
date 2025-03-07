import React from 'react';
import ShimmerCards from './ShimmerCards';
import ErrorPage from './ErrorPage';

class About extends React.Component{

    constructor(){
        super();

        this.state = {
            myGitData : {}
        }
    }

   async componentDidMount()                                 //Work when the component get called
    {
        let fetchMyData = ""
        try{
            const fetchData = async () => {
                fetchMyData = await fetch("https://api.github.com/users/Mkdheer");
                let myRawData = await fetchMyData.json();
                this.setState(
                    {
                        myGitData : myRawData,
                    }
                )
            }
            fetchData();
        }catch(err){
            <ErrorPage />
        }
    }
    
    async componentDidUpdate(){                               //Work when the component states get updated
        console.log("Component did update");
    }

    async componentWillUnmount(){                             //Work when the component get changed
        console.log("Component will Unmount");
    }
    

    render(){
        const {myGitData} = this.state
        console.log("My Git Data", myGitData);
        if(myGitData === null ) return <ShimmerCards />
         return !myGitData? <ShimmerCards/> :
         (
            <div className='bg-[#7c90b3] h-[84vh] content-center'>

                <div className='flex justify-center '>
                    <div className='bg-[#56647bc5] w-[29em] h-[20em] flex justify-center self-end
'>
                        <img src={myGitData?.avatar_url}
                             alt= "No Image"
                            className='relative w-[25em] h-[27em] bottom-[50%]' />
                    </div>
                    <div className='bg-white w-[30em] h-[30em] flex text-center'>
                            <div className='p-6' >
                                <h1 className='text-left mt-2 text-3xl font-bold'>{myGitData?.name}</h1>
                                <h2 className='text-[orangered] text-left text-[3em] m-0'> Frontend Developer </h2>
                                <p className='text-blue-800 text-md leading-8 text-left font-[Verdana, Geneva, Tahoma, sans-serif]'>
                                    Passionate Frontend Developer skilled in React.js, JavaScript, HTML, CSS, and UI/UX design. 
                                    I specialize in building responsive, high-performance web applications with clean and maintainable code. 
                                    Experienced in Redux, Tailwind, Bootstrap, and API integration, I focus on creating seamless user experiences. 
                                    Always eager to learn, optimize performance, and explore new technologies. 🚀
                                </p>
                            </div>
                      </div>
                </div>
            </div>
        )
    }
}

export default About;
