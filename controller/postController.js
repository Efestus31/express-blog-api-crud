const { json } = require('express')
const posts = require('../db/db.js')
//integrazione per bonus
//method fs per leggere e modificare i file di sistema
const fs = require('fs')


const index = (req, res) => {

    //console.log(posts);
    
    //send response with the 200 status
    res.status(200).json(
        {
            data: posts,
            counter: posts.length
        }
    )
}

const show = (req, res) => {
     const post = posts.find(post => post.slug === req.params.slug)

     console.log(post);
     if (!post){
        return res.status(404).json({
            error: `404! Not found`
        })
     }
     return res.json({
        data:post
     })
}


const store = (req, res) => {
    //Crea un nuovo oggetto all'interno del db
    const post ={
        title: req.body.title,
        slug: req.body.slug,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags,
    }

    //validazione dei campi dell'oggetto
    if (!post.title || !post.slug || !post.content) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    //aggiunge il nuovo post all'array
    posts.push(post)

    //aggiorna file db
    fs.writeFileSync('./db/db.js',`module.exports = ${JSON.stringify(posts, null, 4)}`)

    res.json({
        data: posts,
        status: 201,
        counter: posts.length
    })
}
const update = (req, res) => {
    //find a post by slug
    const post = posts.find(post => post.slug.toLowerCase() === req.params.slug)
    //check if the user is updating the correct post
    if(!post){
        return res.status(404).json({ error: `No post found with this slug: ${req.params.slug}!`})
    }
    //update the post object
    post.title = req.body.title
    post.slug = req.body.slug
    post.content = req.body.content
    post.image = req.body.image
    post.tags = req.body.tags

    //check if there are missing fields
    if(!post.title || !post.slug || !post.content || !post.image || !post.tags){ 
        return res.status(400).json({ error: "Missing required fields" })
        }
    //update the js file
    fs.writeFileSync('./db/db.js', `module.exports = ${JSON.stringify(posts, null, 4)}`)


    //return the update posts list
    return res.status(201).json({status: 201, data: posts})
} 

const destroy =(req, res) => {

    //find the post by slug
    const post = posts.find(post => post.slug.toLowerCase() === req.params.slug)

    //check if there is deleting the correct file 
    if(!post){
        return res.status(404).json({
            error: `No post found with the given slug: ${req.params.slug}`
        })
    }
    //remove the resource for the array
    const newPosts = posts.filter(post => post.slug.toLowerCase() !== req.params.slug)

    //save the js file
    fs.writeFileSync('./db/db.js', `module.export = ${JSON.stringify(newPosts, null, 4)}`)
    //return the update posts list
    return res.status(200).json({
        status: 200,
        data: newPosts
    })

}

module.exports = {
    index,
    show,
    store,
    update,
    destroy
}