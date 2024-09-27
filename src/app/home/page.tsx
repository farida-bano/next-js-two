import link from 'next/link';
export default function Home (){
    return(
        <div>
            <ul>
                <link href="/"><li>Home</li></link>

                <link href="/about"><li>go to About Page</li></link> <br/>
                <link href="/contact"><li>go to Contact Page</li>
                <link href ="/about/all/eduction"><li>all</li> </link>
                </link>
            </ul>
        </div>
    
    );
}