import {Fragment} from "react";
import Link from "next/link";

const NewsPage = () => {
    return (<Fragment>
        <h1>THE news Page</h1>
        <ul>
            {/*339. Linking pages*/}
            <li><Link href="/news/123">News A</Link></li>
            <li>News B</li>
            <li>News C</li>
        </ul>
    </Fragment>)
}

export default NewsPage;