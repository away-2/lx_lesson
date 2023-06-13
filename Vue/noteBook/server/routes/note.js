// 笔记相关的接口
const router = require('koa-router')()
const userService = require('../controllers/mySqlControll.js')
const utils = require('../config/utils.js')

router.prefix('/note')

// 根据分类查找对应的笔记列表
router.post('/findNoteListByType', async (ctx, next) => {
  // console.log(ctx.request.body);
  const { note_type } = ctx.request.body
  // 去note库中查找多有的类型为note_type的文章
  try {
    const result = await userService.findNoteListByType(note_type)
    ctx.body = {
      code: '80000',
      data: result,
      msg: '查找成功'
    }
  } catch (error) {
    ctx.body = {
      code: '80002',
      data: error,
      msg: '服务器异常'
    }
  }
})

// 根据id查找对应的笔记
router.post('/findNoteDetailById', async (ctx, next) => {
  // console.log(ctx.request.body);
  const { id } = ctx.request.body
  // 拿着这个id去数据库中取值
  try {
    const result = await userService.findNoteDetailById(id)
    if (result.length) {
      ctx.body = {
        code: '80000',
        data: result[0],
        msg: '查找成功'
      }
    } else {
      ctx.body = {
        code: '80004',
        data: 'error',
        msg: '查找失败'
      }
    }
  } catch (error) {
    ctx.body = {
      code: '80002',
      data: error,
      msg: '服务器异常'
    }
  }
})

// 发布笔记
router.post('/publish', async (ctx, next) => {
  const {
    title,
    note_type,
    head_img,
    note_content,
    userId,
    nickname
  } = ctx.request.body
  const c_time = utils.formateDate(new Date())
  const m_time = utils.formateDate(new Date())

  try {
    const result = await userService.notePublish([userId, title, note_type, note_content, c_time, m_time, head_img, nickname])
    // console.log(result);
    if (result.affectedRows !== 0) {
      ctx.body = {
        code: '80000',
        data: 'ok',
        msg: '发布成功'
      }
    } else {
      ctx.body = {
        code: '80004',
        data: 'error',
        msg: '发布失败'
      }
    }
  } catch (error) {
    ctx.body = {
      code: '80002',
      data: error,
      msg: '服务器异常'
    }
  }
})

module.exports = router