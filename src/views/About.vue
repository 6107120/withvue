<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="submit" value="pet" @click="pet" />
    <input type="submit" value="pets" @click="pets" />
    <input type="submit" value="upload" @click="uploadImg" />
    <input type="submit" value="uploadToProtected" @click="uploadImgToProtected" />
    <input type="submit" value="uploadImgToPrivate" @click="uploadImgToPrivate" />
    <input type="submit" value="getImg" @click="getImg" />
    <input type="submit" value="test" @click="test" />
    <input type="submit" value="removeImg" @click="removeImg" />
    <!-- <input type="submit" value="removeImg" @click="removeImg" /> -->
  </div>
</template>

<script>
import { API } from "aws-amplify";
// import { Auth } from "aws-amplify";
import { Storage } from "aws-amplify";


export default {
  methods: {
    pet: async function() {
      const apiName = "BackendApi";
      const path = "pet";
      const myInit = {
        // OPTIONAL
        headers: {}
      };
      await API.get(apiName, path, myInit)
        .then(response => {
          console.log(response); // Add your code here
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    pets: function() {
      const apiName = "BackendApi";
      const path = "pets";
      const myInit = {
        // OPTIONAL
        headers: {}
      };
      API.get(apiName, path, myInit)
        .then(response => {
          console.log(response); // Add your code here
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    uploadImg: function() {
      Storage.put("test.txt", "Hello")
        .then(result => console.log(result))
        .catch(err => console.log(err));
    },
    uploadImgToProtected: function() {
      Storage.put("test.txt", "Protected Content", {
        level: "protected",
        contentType: "text/plain"
      })
        .then(result => console.log(result))
        .catch(err => console.log(err));
    },
    uploadImgToPrivate: function() {
      Storage.put("tests.txt", "Private Content", {
        level: "private",
        contentType: "text/plain"
      })
        .then(result => console.log(result))
        .catch(err => console.log(err));
    },
    getImg: function() {
      Storage.get("test.txt")
        .then(result => console.log(result))
        .catch(err => console.log(err));
    },
    test: function() {
      Storage.list("", {
        level: "protected"
        // identityId: "xxx" // the identityId of that user })
      })
        .then(result => console.log(result))
        .catch(err => console.log(err));
    },
    removeImg: function() {
      Storage.remove("test.txt")
        .then(result => console.log(result))
        .catch(err => console.log(err));
    }
  }
};
</script>