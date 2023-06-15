import { cvModel } from '../models/cv.model.js';

export const getcv = async (req, res) => {
  const cv = await cvModel.findAll();
  return res.json(cv);
};

export const create = async (req, res) => {
  const { mycv } = req.body;
  //const createdcv = await cvModel.create({ id: 1, nome: Francisco Leonel Semedo Oliveira, idade: 24, experiencia: Servente e operador de maquina, escolaridade: 12, curso: Ciencias e Tecnologias});
  return res.json(createdcv);
};
//export const update = async (req, res) => {
//  const id = req.params.idUpdate;
//  return res.json({ api: 'update' });
//};
export const update = async (req, res) => {
  const cv = await cvModel.findOne({
    where: { id: req.params.idUpdate },
  });
  await cv.update(req.body)
  //const { nome, idade, escolaridade, experiencia, curso } = req.body
  //const updateCv = { nome, idade, escolaridade, experiencia, curso, _id:id }
  //await cvModel.findByIdAndUpdate(id,updateCv)
  return res.json(cv);
};


