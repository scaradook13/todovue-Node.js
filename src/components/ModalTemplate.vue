<template>
    <Teleport to="body">
        <div class="backdrop"></div>
        <dialog :open="true" class=" z-[999] rounded-xl p-6  overflow-hidden">
            <div class="flex flex-col items-center ">
                <header class="p-3">
                    <slot name="modal-header">
                        
                    </slot> 
                </header>
                <main class="p-3">
                    <slot name="modal-content">

                    </slot>
                </main>
                <!-- Action -->
                <div class="flex justify-center">
                    <slot/>
                </div>
            </div> 
        </dialog>
    </Teleport>
</template>

<style scoped>
.backdrop {
    position: fixed;
    /* Ensures the backdrop covers the entire viewport */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* Semi-transparent black */
    z-index: 99;
    /* Ensure it's on top of other content */
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>