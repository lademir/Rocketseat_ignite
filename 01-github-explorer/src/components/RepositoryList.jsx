import { RepositoryItem } from "./RepositoryItem";


const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://www.github.com/lademir/Rocketseat_ignite'
}


export function RepositoryList() {
    return (
        <section>
            <h1>Lista de repositórios</h1>

            <ul>
               <RepositoryItem repository={repository}/>
               <RepositoryItem repository={repository}/>
               <RepositoryItem repository={repository}/>
               <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )
}