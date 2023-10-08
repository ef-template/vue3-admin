<script setup lang="ts">
import { setThemeColor, getThemeColor } from "@/utils";

const router = useRouter();

function testMessage() {
  ElMessage.success("test Message Components");
}

function toPage(path: string) {
  router.push({
    path,
  });
}

const generateData = () => {
  const data = [];
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `备选项 ${i}`,
      disabled: i % 4 === 0,
    });
  }
  return data;
};

const tdata = ref(generateData());
const tvalue = ref([1, 4]);

const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: true,
  type: ["即时配送"],
  resource: "线上品牌商赞助",
  desc: "",
});

const color1 = ref("");

const onSubmit = () => {};

const open = () => {
  ElMessageBox.alert("这是一段内容", "标题名称", {
    confirmButtonText: "确定",
    callback: (action) => {
      ElMessage({
        type: "info",
        message: `action: ${action}`,
      });
    },
  });
};

const activeName = ref("first");
const dialogVisible = ref(false);
const handleClose = (done) => {
  ElMessageBox.confirm("确认关闭？")
    .then((_) => {
      done();
    })
    .catch((_) => {});
};

const drawer = ref(false);
const direction = ref("rtl");

const handleColorChange = (color) => {
  console.log({ color });
  setThemeColor(color);
};

onMounted(() => {
  console.log({
    themeColor: getThemeColor(),
  });
  color1.value = getThemeColor();
});
</script>

<template>
  <div>
    <div mt-20px flex flex-items-center>
      <span mr-15px>来试试切换主题色：</span>
      <el-color-picker v-model="color1" @change="handleColorChange"></el-color-picker>
    </div>

    <div mt-20px>
      <div>
        <el-button @click="testMessage"> 测试Message组件 </el-button>
        <el-button type="primary" @click="toPage('/test/form')"> To Form Page </el-button>
        <el-button type="success"> 成功按钮 </el-button>
        <el-button type="info"> 信息按钮 </el-button>
        <el-button type="warning"> 警告按钮 </el-button>
        <el-button type="danger"> 危险按钮 </el-button>
      </div>

      <div style="margin: 20px 0">
        <el-button plain> 朴素按钮 </el-button>
        <el-button type="primary" plain> 主要按钮 </el-button>
        <el-button type="success" plain> 成功按钮 </el-button>
        <el-button type="info" plain> 信息按钮 </el-button>
        <el-button type="warning" plain> 警告按钮 </el-button>
        <el-button type="danger" plain> 危险按钮 </el-button>
      </div>

      <div>
        <el-button round> 圆形按钮 </el-button>
        <el-button type="primary" round> 主要按钮 </el-button>
        <el-button type="success" round> 成功按钮 </el-button>
        <el-button type="info" round> 信息按钮 </el-button>
        <el-button type="warning" round> 警告按钮 </el-button>
        <el-button type="danger" round> 危险按钮 </el-button>
      </div>
    </div>

    <div mt-20px>
      <el-radio-group v-model="direction">
        <el-radio label="ltr">从左往右开</el-radio>
        <el-radio label="rtl">从右往左开</el-radio>
        <el-radio label="ttb">从上往下开</el-radio>
        <el-radio label="btt">从下往上开</el-radio>
      </el-radio-group>

      <el-button @click="drawer = true" type="primary" style="margin-left: 16px;"> 点我打开 </el-button>
      <!-- eslint-disable-next-line vue/no-deprecated-v-bind-sync -->
      <el-drawer title="我是标题" v-model="drawer" :direction="direction" :before-close="handleClose">
        <span>我来啦!</span>
      </el-drawer>
    </div>
    <div mt-20px>
      <el-popconfirm title="这是一段内容确定删除吗？">
        <el-button slot="reference">删除</el-button>
      </el-popconfirm>
    </div>
    <div mt-20px>
      <el-popover
        placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      >
        <el-button slot="reference">hover 激活</el-button>
      </el-popover>
    </div>
    <div class="box" mt-20px>
      <div class="top">
        <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
          <el-button>上左</el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
          <el-button>上边</el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
          <el-button>上右</el-button>
        </el-tooltip>
      </div>
      <div class="left">
        <el-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
          <el-button>左上</el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
          <el-button>左边</el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
          <el-button>左下</el-button>
        </el-tooltip>
      </div>

      <div class="right">
        <el-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
          <el-button>右上</el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
          <el-button>右边</el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
          <el-button>右下</el-button>
        </el-tooltip>
      </div>
      <div class="bottom">
        <el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
          <el-button>下左</el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
          <el-button>下边</el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
          <el-button>下右</el-button>
        </el-tooltip>
      </div>
    </div>
    <div mt-20px>
      <el-button text @click="dialogVisible = true">点击打开 Dialog</el-button>
      <!-- eslint-disable-next-line vue/no-deprecated-v-bind-sync -->
      <el-dialog title="提示" v-model="dialogVisible" width="30%" :before-close="handleClose">
        <span>这是一段信息</span>
        <template #footer>
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </template>
      </el-dialog>
    </div>
    <div mt-20px>
      <el-dropdown>
        <span class="el-dropdown-link"> Dropdown List </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item disabled>Action 4</el-dropdown-item>
            <el-dropdown-item divided>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div mt-20px>
      <el-tabs v-model="activeName">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
    <div mt-20px>
      <el-button text @click="open">点击打开 Message Box</el-button>
    </div>
    <div mt-20px flex>
      <el-badge :value="12" class="item" mr-20px>
        <el-button size="small">评论</el-button>
      </el-badge>
      <el-badge :value="3" class="item" mr-20px>
        <el-button size="small">回复</el-button>
      </el-badge>
      <el-badge :value="1" class="item" type="primary" mr-20px>
        <el-button size="small">评论</el-button>
      </el-badge>
      <el-badge :value="2" class="item" type="warning">
        <el-button size="small">回复</el-button>
      </el-badge>
    </div>
    <div mt-20px>
      <el-pagination background layout="prev, pager, next" :total="1000"> </el-pagination>
    </div>
    <div mt-20px>
      <el-tag>标签一</el-tag>
      <el-tag type="success">标签二</el-tag>
      <el-tag type="info">标签三</el-tag>
      <el-tag type="warning">标签四</el-tag>
      <el-tag type="danger">标签五</el-tag>
    </div>
    <div mt-20px>
      <el-transfer v-model="tvalue" :data="tdata"></el-transfer>
    </div>
    <div mt-20px>
      <el-form :model="form" label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 100%" />
          </el-col>
          <el-col class="line" :span="2"> - </el-col>
          <el-col :span="11">
            <el-time-picker v-model="form.date2" type="fixed-time" placeholder="选择时间" style="width: 100%" />
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送">
          <el-switch v-model="form.delivery" />
        </el-form-item>
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type" />
            <el-checkbox label="地推活动" name="type" />
            <el-checkbox label="线下主题活动" name="type" />
            <el-checkbox label="单纯品牌曝光" name="type" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源">
          <el-radio-group v-model="form.resource">
            <el-radio label="线上品牌商赞助" />
            <el-radio label="线下场地免费" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input v-model="form.desc" type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit"> 立即创建 </el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
