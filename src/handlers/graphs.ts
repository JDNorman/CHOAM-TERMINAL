import {ChartConfiguration} from 'chart.js';
import {ChartJSNodeCanvas} from 'chartjs-node-canvas';
import {apiData, db} from '../db';
import {desc} from 'drizzle-orm';
//API DATA import {}
import {dayjs} from './dates';

const smallChartJSNodeCanvas = new ChartJSNodeCanvas({
  width: 1000,
  height: 400,
  backgroundColour: 'black',
});
smallChartJSNodeCanvas.registerFont('./fonts/Dune_Rise.ttf', {
  family: 'Dune Rise',
});

const bigChartJSNodeCanvas = new ChartJSNodeCanvas({
  width: 2000,
  height: 2000,
  backgroundColour: 'black',
});
bigChartJSNodeCanvas.registerFont('./fonts/Dune_Rise.ttf', {
  family: 'Dune Rise',
});

export const renderMediumChart = (configuration: ChartConfiguration) => 
  smallChartJSNodeCanvas.renderToBuffer(configuration);

export const renderBigChart = (configuration: ChartConfiguration) =>
  bigChartJSNodeCanvas.renderToBuffer(configuration);