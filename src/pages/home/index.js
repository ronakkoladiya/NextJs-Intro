import Link from "next/link";
import Header from "../../Components/Navbar/Navbar";

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
};

function Home({ data }){
    return (
        <>
            <Header />
            {
                data?.slice(0, 10).map((curElem) => {
                    return (
                        <div key={curElem.id} className="ssr-styles">
                            <h3>{curElem.id}</h3>
                            <Link href={`/home/${curElem.id}`}>
                                <h2 className={'font-semibold capitalize'}>{curElem.title}</h2>
                            </Link>
                        </div>
                    );
                })
            }
        </>
    );
};

export default Home;