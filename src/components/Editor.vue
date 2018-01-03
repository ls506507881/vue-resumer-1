<template>
    <div id="editor">
        <nav>
            <ol>
                <li class="active">
                    <svg class="icon">
                        <use xlink:href="#icon-credentials_icon"></use>
                    </svg>
                </li>
                <li>
                    <svg class="icon">
                        <use xlink:href="#icon-bangong"></use>
                    </svg>
                </li>
                <li>
                    <svg class="icon">
                        <use xlink:href="#icon-jiaoyu"></use>
                    </svg>
                </li>
                <li>
                    <svg class="icon">
                        <use xlink:href="#icon-xiangmu"></use>
                    </svg>
                </li>
                <li>
                    <svg class="icon">
                        <use xlink:href="#icon-jiangbei"></use>
                    </svg>
                </li>
                <li>
                    <svg class="icon">
                        <use xlink:href="#icon-lianxi"></use>
                    </svg>
                </li>
            </ol>
        </nav>
        <ol class="panes">
          <li></li>
        </ol>
    </div>
</template>

<style lang="scss">
#editor {
  min-height: 100px;
  display: flex;
    > nav{
        background: #000;
        width: 80px;
        text-align: center;
        > ol > li{
            border: 1px solid red;
            padding: 8px 0;
        > .icon{
            width: 24px;
            height: 24px;
            fill: white;
        }
        &.active{
            background: white;
            > .icon{
                fill: #000;
                }
            }
        }
    }
}
</style>
