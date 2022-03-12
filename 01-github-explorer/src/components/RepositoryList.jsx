import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useState, useEffect } from 'react'

// https://api.github.com/users/lademir/repos


export function RepositoryList() {

    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/lademir/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repo => {
                    return (
                        <RepositoryItem key={repo.id} repository={repo} />
                    )
                })}
            </ul>
        </section>
    )
}