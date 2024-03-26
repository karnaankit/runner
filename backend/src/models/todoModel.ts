import knex from "../db/knex";

class todo{
  public static table = "todo";

  public static async getAllTodos() {
    const todo = await knex(this.table).select();
    return todo;
  }

  public static async getTodoById(
    id: number
  ) {
    const todo = await knex(this.table).where({ id })
    return todo;
    }


  public static async addTodo(
    task: string,
  ) {
    const insertedValue = await knex(this.table)
      .insert({
        task
      })
      .returning("*");
    return insertedValue;
  }

  public static async updateTodo(
    id: number,
    task: string,
    completed: boolean,
  ) {
    const updatedValue = await knex(this.table)
      .where({ id })
      .update(
        {
          task,
          completed
        })
      .returning("*");
    return updatedValue;
  }

  public static async deleteTodo(
    id: number
  ) {
    const deletedValue = await knex(this.table)
      .where({ id })
      .del()
      .returning("*");
    return deletedValue;
  }
}

export default todo;
