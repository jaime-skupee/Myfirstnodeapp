import Video from "./video.js"
import Category from "./category.js"
import Channel from "./channel.js"
import User from "./user.js"
import List from "./list.js"
import Clip from "./Clip.js"
//
import Student from "./student.js"
import Article from "./article.js"
import Course from "./course.js"
import Module from "./module.js"
import Lecture from "./lecture.js"
import Content from "./content.js"

/**
 * User Belongs
 */
Video.belongsTo(User, { foreignKey: 'userId' })
User.hasMany(Video, { foreignKey: 'userId' })

Channel.belongsTo(User, { foreignKey: 'userId' })
User.hasMany(Channel, { foreignKey: 'userId' })

List.belongsTo(User, { foreignKey: 'userId' })
User.hasMany(List, { foreignKey: 'userId' })

Article.belongsTo(User, { foreignKey: 'userId' })
User.hasMany(Article, { foreignKey: 'userId' })

/**
 * For Category Parents
 */
Category.belongsTo( Category, {   
    foreignKey: 'parentId', 
    as: 'upper' 
})

/**
 * Video
 */
Video.belongsToMany(Category, { through: 'CategoryVideo' })
Category.belongsToMany(Video, { through: 'CategoryVideo' })
Clip.belongsTo(Video, {   
    foreignKey: 'videoId'
})

/**
 * List
 */
List.belongsToMany(Channel, { through: 'ListChannel' })
Channel.belongsToMany(List, { through: 'ListChannel' })
List.belongsToMany(Video, { through: 'ListVideo' })
Video.belongsToMany(List, { through: 'ListVideo' })

/**
 * Articles, Courses, Modules and Lecture
 */
// Content.belongsTo(Article, { foreignKey: 'articleId' })
// Article.hasMany(Content, { foreignKey: 'articleId' })

Article.belongsToMany(Content, { through: 'ContentArticle' })
Content.belongsToMany(Article, { through: 'ContentArticle' })

Lecture.belongsToMany(Content, { through: 'ContentLecture' })
Content.belongsToMany(Lecture, { through: 'ContentLecture' })

Article.belongsToMany(Category, { through: 'CategoryArticle' })
Category.belongsToMany(Article, { through: 'CategoryArticle' })

Course.belongsToMany(Category, { through: 'CategoryCourse' })
Category.belongsToMany(Course, { through: 'CategoryCourse' })

Module.belongsTo(Course, { foreignKey: 'courseId' })
Course.hasMany(Module, { foreignKey: 'courseId' })

Lecture.belongsTo(Module, { foreignKey: 'moduleId' })
Module.hasMany(Lecture, { foreignKey: 'moduleId' })

Lecture.belongsTo(Video, { foreignKey: 'videoId' })

export default {
    Video,
    Category,
    Channel,
    User,
    List,
    Clip,
    Student,
    Course,
    Module,
    Article,
    Content
}