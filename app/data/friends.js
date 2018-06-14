// Survery (DATA)
// ==============================================================================
// Below data will hold all of the  friends.
// Initially we just set it equal to a "dummy" friends.
// ==============================================================================

var friends = [
    {
        name: "Rhoda",
        photo: "http://images2.fanpop.com/images/photos/8100000/Rhoda-The-Mary-Tayler-Moore-Show-classic-television-revisited-8180802-398-500.jpg",
        scores: [2,3,2,3,5]
    },

    {
        name: "Tom",
        photo: "http://media4.s-nbcnews.com/j/newscms/2015_29/1124796/150715-tom-selleck-portrait-yh-0957p_1da3c82f630857cf18c5f95e7f712711.nbcnews-ux-2880-1000.jpg",
        scores: [2,3,2,3,5]
        },


    {
        name: "Fred",
        photo: "http://1.bp.blogspot.com/_BHp6iAhvNos/TU291DYUSqI/AAAAAAAAAnw/SgjJVu6lz1Y/s1600/fred-flintstone.jpg",
        scores: [2,3,2,3,5]
        },

]

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
