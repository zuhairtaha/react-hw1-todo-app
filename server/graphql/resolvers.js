import Category from "../models/category"
import Task from "../models/task"

const resolvers = {
  Query: {
    categories: () => Category.find(),
    tasks: () => Task.find(),
    task: (_, args) => Task.findById(args.id),
    category: (_, args) => Category.findById(args.id)
  },
  Category: {
    tasks: (parentValue) => Task.find({"categoryid": parentValue.id})
  },
  Mutation: {
    addCategory: (root, args, context, info) => {
      let category = new Category({
        title: args.title,
        description: args.description,
      })
      return category.save()
    },

    addTask: (root, args, context, info) => {
      let task = new Task({
        categoryid: args.categoryid,
        description: args.description,
        deadline: args.deadline,
        done: args.done,
        important: args.important,
      })
      return task.save()
    }
  }
}

export default resolvers