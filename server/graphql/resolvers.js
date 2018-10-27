const Category = require("../models/category")
const Task = require("../models/task")

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
    addCategory: (_, args) => {
      const {title, description} = args
      let category = new Category({title, description})
      return category.save()
    },

    addTask: (_, args) => {
      const {categoryid, description, deadline, done, important} = args
      let task = new Task({categoryid, description, deadline, done, important})
      return task.save()
    }
  }
}
module.exports = resolvers