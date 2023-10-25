import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return <div>
        Sorry, there is no such route.
        Please follow this link to the  <Link to = "/">home page</Link>
    </div>
}