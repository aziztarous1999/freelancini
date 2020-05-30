 <template>
 <div>

        <div>
                <mdb-input class="md-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <center>
                <mdb-btn outline="primary" rounded size="sm" type="submit" class="md-auto rounded-pill">Search</mdb-btn>
            </center>
        </div>
<br>

<MyJobList />

 </div>
 </template>
 
 <script>
import { mdbContainer, mdbRow, mdbCol,mdbInput, mdbBtn, mdbFormInline } from 'mdbvue';
import MyJobList from '../../components/MyJobList';

 export default {
     components: {
      mdbInput,
      mdbBtn,
      mdbFormInline,
      mdbContainer,
      mdbRow,
      mdbCol,
      MyJobList
    }
 }
 </script>
 
 <style>
 
 </style>