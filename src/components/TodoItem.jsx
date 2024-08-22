import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
    function handleDelete(item) {
        // console.log("Delete buton clicked for item", item);
        setTodos(todos.filter((todo) => todo !== item));
    }
    function handleClick(name) {
        // console.log("Item text clicked", name);
        const newArray = todos.map((todo) =>
            todo.name === name ? { ...todo, done: !todo.done } : todo
        );
        setTodos(newArray);
        // console.log(todos);
    }
    const className = item.done ? styles.completed : "";
    return (
        <div className={styles.item}>
            <div className={styles.itemName}>
                <span
                    className={className}
                    onClick={() => handleClick(item.name)}
                >
                    {item.name}{" "}
                </span>
                <span>
                    <button
                        onClick={() => handleDelete(item)}
                        className={styles.deleteButton}
                    >
                        X
                    </button>
                </span>
            </div>

            <hr className={styles.line} />
        </div>
    );
}
