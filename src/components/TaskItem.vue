<template>

    <li class="flex  gap-3 p-2 my-2 rounded-sm shadow">
        <input @change="toggleCheckboxHandler(props.id)" :checked="props.isFinished" type="checkbox">
        <p class="hidden">{{ props.id }}</p>
        <p @dblclick="isUpdating(props.id)" :class="{ ' line-through': props.isFinished }">{{ props.name }}
        </p><button v-if="isFinished"
        class="px-3 ml-auto bg-red-600 text-gray-50" @click="deleteTaskHandler(props.id)">Remove</button>
    </li>
    <div>
        <Modal v-if="IsUpdateShow === props.id">
        <template #modal-header>
        <h3 class="text-lg font-bold">Updating task: {{ props.name }}</h3>
      </template> 

      <!-- Second Slot -->
      <template #modal-content>
        <input v-model="updateTask.name" type="text" class="border rounded border-black  px-2">
      </template>

      <!-- Last Slot Action -->
      <template #default>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <div class="flex gap-5">
            <button class="bg-red-500 text-white py-1 px-3 rounded font-semibold" @click="isUpdating">Cancel</button>
            <button class="bg-green-500 text-white py-1 px-3 rounded font-semibold" @click="updatedTodo(props.id,updateTask )">Update Task</button>
          </div>
          </form>
        </div>
      </template>
      </Modal>
          </div>
</template>
<script setup>
const props = defineProps(['name', 'id', 'isFinished'])
import Modal from '@/components/ModalTemplate.vue'
import { useTodo } from "@/store/TodoStore";
import { reactive } from 'vue';
const { IsUpdateShow, isUpdating, updatedTodo } = useTodo();
  
const updateTask = reactive ({
  name: ''
})

const toggleCheckboxHandler = async (taskId) => {
  const { toggleCheckbox } = useTodo();
  try {
        const checkBox = {
            id: taskId,
            isFinished: !props.isFinished
        }
        await toggleCheckbox(checkBox.id, checkBox.isFinished)
  } catch (err) {
    console.log(err);
  }
};

const deleteTaskHandler = async (taskId) => {
    const { deleteTask } = useTodo();
    try {
        await deleteTask(taskId);
    } catch (err) {
        console.log(err);
    }
}
 
</script>