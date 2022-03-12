export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository?.name ?? "Default"}</strong>
            <p>{props.repository.description ?? "Sem descricao"}</p>

            <a href={props.repository.html_url}>
                Acessa repositório
            </a>
        </li>
    );
}