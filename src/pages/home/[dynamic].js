import Header from "../../Components/Navbar/Navbar";

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    const paths = data?.map((curElem) => {
        return {
            params: {
                dynamic: curElem.id.toString(),
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.dynamic;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
};

const myData = ({ data }) => {
    const { id, title, body } = data;
    return (
        <>
            <Header />
            <div className="ssr-styles ssr-styles-inside">
                <h3 className={'mb-[5px]'}>{id}</h3>
                <h2 className={'font-bold capitalize mb-[10px]'}>{title}</h2>
                <p>{body}</p>
            </div>
        </>
    );
};

export default myData;

// What will happend if the file is already exist in our folder and we tried to call the pages dynamic route ?

// Which page will be serve by the next.js app?

// getStaticPaths defines which pages next.js has to render when exporting.
// It is used to generate all available dynamic routes.