import { useEffect, useState } from "react"

const useVolunteer = () => {
    const [volutnteers, setVolunteers] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setVolunteers(data))
    }, []);
    return [volutnteers, setVolunteers];
}
export default useVolunteer;