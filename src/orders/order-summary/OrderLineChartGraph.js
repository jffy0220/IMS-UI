const { default: AppContext } = require("context/Context");
const { propTypes } = require("react-bootstrap/esm/Image");
import { forwardRef, useContext } from "react";
import PropTypes from 'prop-types';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { getColor, rgbaColor } from "helpers/utils";

const payment = {
    all: [4, 1, 6, 2, 7, 12, 4, 6, 5, 4, 5, 10],
    successful: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8],
    failed: [1, 0, 2, 1, 2, 1, 1, 0, 0, 1, 0, 2]
};

const getOption = (data, paymentStatus, isDark) => ({
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        padding: [7, 10],
        backgroundColor: getColor('100'),
        borderColor: getColor('300'),
        borderWidth: 1,
        transitionDuration: 0,
        textStyle: {
            fontWeight: 500,
            fontSize: 12,
            color: getColor('dark')
        },
        formatter: params => `${params[0].axisValue} - ${params[0].value} Orders`
    },
    xAxis: {
        type: 'category',
        data: [
            '9:00 AM',
            '10:00 AM',
            '11:00 AM',
            '12:00 PM',
            '1:00 PM',
            '2:00 PM',
            '3:00 PM',
            '4:00 PM',
            '5:00 PM',
            '6:00 PM',
            '7:00 PM',
            '8:00 PM'
        ],
        boundaryGap: false,
    splitLine: {
      show: true,
      lineStyle: {
        color: rgbaColor('#fff', 0.1)
      },
      interval: 0
    },
    axisLine: {
      lineStyle: {
        color: rgbaColor('#fff', 0.1)
      }
    },
    axisTick: {
      show: true,
      length: 10,
      lineStyle: {
        color: rgbaColor('#fff', 0.1)
      }
    },
    axisLabel: {
      color: getColor('400'),
      fontWeight: 600,
      fontSize: 12,
      margin: 15,
      interval: window.innerWidth < 768 ? 'auto' : 0,
      formatter: value => value.substring(0, value.length - 3)
    }
  },
  yAxis: {
    type: 'value',
    axisPointer: {
      show: false
    },
    splitLine: {
      show: false
    },
    axisLabel: {
      show: false
    },
    axisTick: { show: false },
    axisLine: { show: false }
  },
  series: [
    {
      type: 'line',
      smooth: true,
      data: data[paymentStatus].map(item => (item * 3.14).toFixed(2)),
      symbol: 'emptyCircle',
      itemStyle: {
        color: isDark ? getColor('primary') : getColor('white')
      },
      lineStyle: {
        color: isDark
          ? rgbaColor(getColor('primary'), 0.8)
          : rgbaColor(getColor('white'), 0.8)
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: isDark
                ? rgbaColor(getColor('primary'), 0.5)
                : rgbaColor('#fff', 0.5)
            },
            {
              offset: 1,
              color: isDark
                ? rgbaColor(getColor('primary'), 0)
                : rgbaColor('#fff', 0)
            }
          ]
        }
      },
      emphasis: {
        lineStyle: {
          width: 2
        }
      }
    }
  ],
  grid: { right: 15, left: 15, bottom: '15%', top: 0 }
})

const OrderLineChartGraph = forwardRef(({ data, paymentStatus, style }, ref) => {
    const {
        config: { isDark }
    } = useContext(AppContext)

    return (
        <ReactEChartsCore
            echarts={echarts}
            ref={ref}
            option={getOption(payment, paymentStatus, isDark)}
            style={style}
        />
    )
})

OrderLineChartGraph.propTypes = {
    data: PropTypes.shape({
        all: PropTypes.array,
        successful: PropTypes.array,
        failed: PropTypes.array
    }).isRequired,
    paymentStatus: PropTypes.oneOf(['all', 'successful', 'failed']).isRequired,
    style: PropTypes.object
}

export default OrderLineChartGraph