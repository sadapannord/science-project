const { Schema, model } = require('mongoose');


const projectSchema = new Schema(
    {
        title: {
            type: String,
            required: true
          },
        notes: {
            type: String,
            required: 'Dont forget to add notes!',
            minlength: 1,
            maxlength: 280,
            trim: true,
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        updated: { 
            type: Date, 
            default: Date.now },
        projectAuthor: {
         type: String,
         required: true, 
         trim: true
        },    
        searchHistory: {
            
        } 
    }
);

const Project = model('Project', projectSchema);

module.exports = Project;