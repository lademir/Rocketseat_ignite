import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useState, useEffect } from 'react'

// https://api.github.com/users/lademir/repos

interface Repository {
    name: string;
    description: string;
    html_url: string
}

export function RepositoryList() {

    const [repositories, setRepositories] = useState<Repository[]>([]);

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
                        <RepositoryItem key={repo.name} repository={repo} />
                    )
                })}
            </ul>
        </section>
    )
}