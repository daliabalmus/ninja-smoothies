<template>
     <div class="edit-smoothie container" v-if="smoothie">
          <h2>{{ smoothie.title }} Smoothie</h2>

          <form @submit.prevent="EditSmoothie()">
               <div class="field title">
                    <label for="title">Smoothie title:</label>
                    <input type="text" name="title" v-model="smoothie.title">
               </div>
               <div v-for="(ing, index) in smoothie.ingredients" :key="index" class="field position-relative">
                    <label for="ingredient">ingredient: </label>
                    <input type="text" name="ingredient" v-model="smoothie.ingredients[index]">
                    <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
               </div>
               <div class="field add-ingredient">
                    <label for="add-ingredient">Add an ingredient</label>
                    <input type="text" name="add-ingredient" @keydown.tab.prevent="addIng" v-model="another">
               </div>
               <div class="field center-align">
                    <p v-if="feedback">{{ feedback }}</p>
                    <button class="btn pink">Edit Smoothie</button>
               </div>
          </form>
     </div>
</template>

<script>
import db from "@/firebase/init";
import slugify from 'slugify';

export default {
     name: 'EditSmoothie',
     data() {
          return {
               smoothie: null,
               feedback: null,
               another: null
          }
     },
     created() {
          let ref = db.collection('smoothies').where('slug', '==', this.$route.params.smoothie_slug);
          ref.get().then(snapshot => {
               snapshot.forEach(doc => {
                    this.smoothie = doc.data();
                    this.smoothie.id = doc.id;
               })
          })
     },
     methods: {
          EditSmoothie(){
                if (this.smoothie.title) {
                    this.feedback = null;

                    // create a slug
                    this.smoothie.slug = slugify(this.smoothie.title, {
                         replacement: '-',
                         remove: /[$*_+～.()'"!\-:@]/g,
                         lower: true
                    })

                    db.collection('smoothies').doc(this.smoothie.id).update({
                         title: this.smoothie.title,
                         ingredients: this.smoothie.ingredients,
                         slug: this.smoothie.slug
                    }).then(() => {
                         this.$router.push({ name: 'Home' }).catch(err => {
                              console.log(err);
                         })
                    });
               } else {
                    this.feedback = 'You mult enter a smoothie title';
               }
          },
          addIng() {
               if (this.another) {
                    this.smoothie.ingredients.push(this.another);
               
                    this.another = null;
                    this.feedback = null;
               } else {
                    this.feedback = 'You must enter a value to add an ingredient';
               }
          },
          deleteIng(ing) {
               this.smoothie.ingredients = this.smoothie.ingredients.filter(ingredient => {
                    return ingredient != ing;
               })
          }
     }
}
</script>

<style scoped>
.edit-smoothie {
     margin-top: 60px;
     padding: 20px;
     max-width: 500px;
}
.edit-smoothie h2 {
     font-size: 2em;
     margin: 20px auto;
     margin-bottom: 60px;
}
.edit-smoothie .field {
     margin: 20px auto;
}
p {
     color: #f00;
}
.edit-smoothie .delete {
     position: absolute;
     right: 0;
     bottom: 16px;
     color: #aaa;
     font-size: 1.4em;
     cursor: pointer;
}
.position-relative {
     position: relative;
}
</style>