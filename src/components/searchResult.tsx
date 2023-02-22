import type { Student } from "@/utils/types";

const SearchResult = ( result: Student ) => {
    return (
        <>

            <div>
                <h1>{result.name}</h1>
                <h2>{result.email}</h2>
                <h3>{result.class}</h3>

            </div>
        </>
    )
}

export default SearchResult